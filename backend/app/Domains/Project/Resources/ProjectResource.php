<?php

namespace App\Domains\Project\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'client' => $this->client,
            'location' => $this->location,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'status' => $this->status,
            'budget' => $this->budget,
            'margin_projection' => $this->margin_projection,
            'tasks_count' => $this->whenCounted('tasks'),
            'active_boq' => $this->activeBoq,
            'created_at' => $this->created_at,
        ];
    }
}
