<?php

namespace App\Domains\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Domains\Finance\Services\FinanceService;
use App\Domains\Project\Models\Project;
use Illuminate\Http\Request;

class FinanceController extends Controller
{
    protected $service;

    public function __construct(FinanceService $service)
    {
        $this->service = $service;
    }

    public function getDashboard(Project $project)
    {
        return response()->json([
            'burn_rate' => $this->service->getBurnRate($project),
            'overruns' => $this->service->detectOverruns($project),
            'forecast' => $this->service->getCashflowForecast($project),
            'total_budget' => $project->budget,
            'actual_spend' => $project->expenses()->sum('amount')
        ]);
    }
}
