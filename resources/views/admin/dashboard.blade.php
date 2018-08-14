@extends('admin.layouts.app_admin')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <div class="jumbotron text-center">
        <p>Категорий 0</p>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="jumbotron text-center">
        <p>Материалов 0</p>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="jumbotron text-center">
        <p>Посетителей 0</p>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="jumbotron text-center">
        <p>Сегодня 0</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-6"><a class="btn btn-block btn-default" href="#">Создать категорию</a> <a class="list-group-item" href="#"> </a>
      <h4><a class="list-group-item" href="#">Категория первая</a></h4>
      <a class="list-group-item" href="#"> </a>
      
      <p><a class="list-group-item" href="#">Кол-во материалов</a></p>
      <a class="list-group-item" href="#"> </a>
    </div>

    <div class="col-sm-6"><a class="btn btn-block btn-default" href="#">Создать Материал</a> <a class="list-group-item" href="#"> </a>

      <h4><a class="list-group-item" href="#">Материал первый</a></h4>
      <a class="list-group-item" href="#"> </a>

      <p><a class="list-group-item" href="#">Категория</a></p>
      <a class="list-group-item" href="#"> </a>
    </div>
  </div>
</div>



@endsection
