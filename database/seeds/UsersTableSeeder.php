<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'admin@admin.com',
            'password' => Hash::make('12345678'),
            'name' => 'uptaeb',
            'surname' => 'informatica',
            'role'=>'admin',
            'status'=>true,
            'image'=>null
        ]);
    }
}
