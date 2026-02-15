<?php

namespace App\Domains\Planning\Repositories;

use App\Domains\Planning\Models\BOQ;
use App\Domains\Planning\Models\BOQItem;

class PlanningRepository
{
    public function getActiveBoq($projectId)
    {
        return BOQ::where('project_id', $projectId)->where('is_active', true)->with('items')->first();
    }

    public function createBoq(array $data)
    {
        return BOQ::create($data);
    }

    public function addItems(BOQ $boq, array $items)
    {
        foreach ($items as $item) {
            $boq->items()->create($item);
        }
        return $boq->load('items');
    }
}
