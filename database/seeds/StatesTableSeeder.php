<?php

use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states = config('data.locations');

        foreach($states as $state)
        {
            DB::table('states')->insert([
                'state' => $state
            ]);
        }
    }
}
