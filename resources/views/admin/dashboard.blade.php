@extends('admin.layouts.app_admin')

@section('content')
<div class="container">
<div class="row">
<div class="col-sm-3">
<div class="jumbotron text-center">
<p><code class="language-html hljs">Категорий 0</code></p>
</div>
</div>

<div class="col-sm-3">
<div class="jumbotron text-center">
<p><code class="language-html hljs">Материалов 0</code></p>
</div>
</div>

<div class="col-sm-3">
<div class="jumbotron text-center">
<p><code class="language-html hljs">Посетителей 0</code></p>
</div>
</div>

<div class="col-sm-3">
<div class="jumbotron text-center">
<p><code class="language-html hljs">Сегодня 0</code></p>
</div>
</div>
</div>

<div class="row">
<div class="col-sm-6"><code class="language-html hljs"><a class="btn btn-block btn-default" href="#">Создать категорию</a> <a class="list-group-item" href="#"> </a></code>

<h4><code class="language-html hljs"><a class="list-group-item" href="#">Категория первая</a></code></h4>
<code class="language-html hljs"><a class="list-group-item" href="#"> </a></code>

<p><code class="language-html hljs"><a class="list-group-item" href="#">Кол-во материалов</a></code></p>
<code class="language-html hljs"><a class="list-group-item" href="#"> </a> </code></div>

<div class="col-sm-6"><code class="language-html hljs"><a class="btn btn-block btn-default" href="#">Создать Материал</a> <a class="list-group-item" href="#"> </a></code>

<h4><code class="language-html hljs"><a class="list-group-item" href="#">Материал первый</a></code></h4>
<code class="language-html hljs"><a class="list-group-item" href="#"> </a></code>

<p><code class="language-html hljs"><a class="list-group-item" href="#">Категория</a></code></p>
<code class="language-html hljs"><a class="list-group-item" href="#"> </a> </code></div>
</div>
</div>



@endsection
