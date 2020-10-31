<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Objects extends Model
{
    protected $table = 'objects';

    protected $fillable = ['name', 'lon', 'let', 'area', 'cost', 'description', 'transport', 'density', 'income', 'address', 'images'];

    protected $guarded = [ 'id', 'created_at', 'updated_at', 'type_id' ];

    protected $hidden = ['created_at', 'updated_at'];


    /**
     * @return BelongsTo
     */
    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
