<?php

namespace App\Domains\Planning\Services;

use App\Domains\Planning\Models\BOQ;
use App\Domains\Project\Models\Project;

class PlanningService
{
    public function calculateTotals(BOQ $boq)
    {
        $boq->total_material = $boq->items()->sum('material_cost');
        $boq->total_labor = $boq->items()->sum('labor_cost');
        $boq->grand_total = $boq->items()->sum('total');
        $boq->save();

        return $boq;
    }

    public function simulateMargin(float $totalCost, float $targetMargin)
    {
        // Margin = (Price - Cost) / Price
        // Price = Cost / (1 - Margin)
        $sellingPrice = $totalCost / (1 - ($targetMargin / 100));
        $marginAmount = $sellingPrice - $totalCost;

        return [
            'original_cost' => $totalCost,
            'simulated_total' => $sellingPrice,
            'margin_amount' => $marginAmount,
            'variance_percent' => $targetMargin
        ];
    }

    public function applyWasteFactor(BOQ $boq, float $wasteFactor)
    {
        $impact = [];
        foreach ($boq->items as $item) {
            $originalMaterial = $item->material_cost;
            $newMaterial = $originalMaterial * (1 + ($wasteFactor / 100));

            // Just return the projection, don't update DB unless explicitly requested
            $impact[] = [
                'item_id' => $item->id,
                'original' => $originalMaterial,
                'simulated' => $newMaterial
            ];
        }
        return $impact;
    }
}
