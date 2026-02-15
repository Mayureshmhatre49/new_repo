<?php

namespace App\Domains\Finance\Events;

use App\Domains\Finance\Models\Budget;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BudgetUpdated
{
    use Dispatchable, SerializesModels;

    public function __construct(public Budget $budget) {}
}
