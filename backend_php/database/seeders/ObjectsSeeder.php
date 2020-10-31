<?php

namespace Database\Seeders;

use App\Models\Objects;
use Illuminate\Database\Seeder;

class ObjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $files = array_diff(scandir(storage_path('import')),['..','.','description.json']);

        $descriptions = json_decode(file_get_contents(storage_path('import/description.json')), true);
        $count = 0;
        foreach ($files as $file) {
            $data = json_decode(file_get_contents(storage_path('import/').$file), true);

            foreach ($data as $item) {

                $item['area'] = $descriptions[$count]['area'];
                $item['cost'] = $descriptions[$count]['cost'];
                $item['description'] = $descriptions[$count]['description'];
                $item['transport'] = rand(1,5);
                $item['density'] = rand(1,5);
                $item['income'] = rand(1,5);
                $item['address'] = $descriptions[$count]['address'];

                foreach ($descriptions[$count]['images'] as $image) {
                    $item['images'][] = url('/image/'.$image);
                }

                $item['images'] = json_encode($item['images']);

                if ($count < 9) {
                    $count ++;
                } else {
                    $count = 0;
                }

                $row = new Objects($item);
                $row->save();
            }
        }


    }
}
