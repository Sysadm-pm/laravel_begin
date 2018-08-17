<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">{{ isset(Auth::user()->name) ? Auth::user()->name : 'Guest' }}</strong>
                            </span> <span class="text-muted text-xs block">menu<b class="caret"></b></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                      @if (Auth::guest())
                          <li><a href="{{ route('login') }}">Login</a></li>
                          <li><a href="{{ route('register') }}">Register</a></li>
                      @else
                          <li>
                                      <a href="{{ route('logout') }}"
                                          onclick="event.preventDefault();
                                                   document.getElementById('logout-form').submit();">
                                          Logout
                                      </a>

                                      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                          {{ csrf_field() }}
                                      </form>
                                  </li>

                      @endif
                        {{-- <li><a href="#">Logout11</a></li>--}}
                    </ul>
                </div>
                <div class="logo-element">
                    IN++
                </div>
            </li>
            <li class="{{-- isActiveRoute('admin') --}}">
                <a href="{{ url('/admin') }}"><i class="fa fa-th-large"></i> <span class="nav-label"> Main view</span></a>
            </li>
            <li class="{{-- isActiveRoute('minor') --}}">
                <a href="{{ url('/minor') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Minor view</span> </a>
            </li>
            <li class="{{-- isActiveRoute('minor') --}}">
                <a href="{{ url('admin/category') }}"><i class="fa fa-th-large"></i> <span class="nav-label">Category</span> </a>
            </li>
            {{ Route::currentRouteName() }}
        </ul>

    </div>
</nav>
