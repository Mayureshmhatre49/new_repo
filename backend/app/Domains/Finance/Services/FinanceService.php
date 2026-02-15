<?php

namespace App\Domains\Finance\Services;

use App\Domains\Project\Models\Project;
use Carbon\Carbon;

class FinanceService
{
    public function getBurnRate(Project $project)
    {
        $totalSpend = $project->expenses()->sum('amount');
        $startDate = Carbon::parse($project->start_date);
        $now = Carbon::now();

        $monthsPassed = $startDate->diffInMonths($now);
        if ($monthsPassed <= 0) $monthsPassed = 1;

        return $totalSpend / $monthsPassed;
    }

    public function detectOverruns(Project $project)
    {
        $overruns = [];
        $budgets = $project->budgets;

        foreach ($budgets as $budget) {
            if ($budget->actual_spend > $budget->allocated_amount) {
                $overruns[] = [
                    'category' => $budget->category,
                    'allocated' => $budget->allocated_amount,
                    'actual' => $budget->actual_spend,
                    'variance' => $budget->actual_spend - $budget->allocated_amount,
                    'percent' => (($budget->actual_spend / $budget->allocated_amount) - 1) * 100
                ];
            }
        }

        return $overruns;
    }

    public function getCashflowForecast(Project $project)
    {
        // Simple linear projection based on burn rate
        $burnRate = $this->getBurnRate($project);
        $remainingBudget = $project->budget - $project->expenses()->sum('amount');

        $monthsRemaining = $remainingBudget > 0 ? $remainingBudget / $burnRate : 0;

        return [
            'monthly_burn' => $burnRate,
            'remaining_budget' => $remainingBudget,
            'projected_completion_months' => $monthsRemaining,
            'total_at_completion' => $project->expenses()->sum('amount') + $remainingBudget
        ];
    }
}
