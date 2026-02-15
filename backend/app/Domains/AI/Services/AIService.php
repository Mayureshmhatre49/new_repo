<?php

namespace App\Domains\AI\Services;

use App\Domains\Project\Models\Project;
use App\Domains\Finance\Services\FinanceService;

class AIService
{
    protected $financeService;

    public function __construct(FinanceService $financeService)
    {
        $this->financeService = $financeService;
    }

    public function analyzeProjectRisk(Project $project)
    {
        $risks = [];

        // Check for budget overruns
        $overruns = $this->financeService->detectOverruns($project);
        foreach ($overruns as $overrun) {
            $risks[] = [
                'type' => 'Margin Alert',
                'title' => 'Budget Overrun in ' . $overrun['category'],
                'content' => sprintf('Actual spend exceeds allocated budget by %.2f%%.', $overrun['percent']),
                'severity' => $overrun['percent'] > 10 ? 'high' : 'medium'
            ];
        }

        // Check for schedule delays
        $delayedTasks = $project->tasks()->where('status', 'Delayed')->count();
        if ($delayedTasks > 0) {
            $risks[] = [
                'type' => 'Schedule Risk',
                'title' => 'Task Delays Detected',
                'content' => "There are $delayedTasks tasks currently behind schedule.",
                'severity' => $delayedTasks > 2 ? 'high' : 'medium'
            ];
        }

        return $risks;
    }
}
