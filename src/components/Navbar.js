import React, { Component } from 'react';

const navbar=()=>{
    return (
      <div>
        <nav class="navbar bg-dark fixed-top border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                    <a class="navbar-brand" href="/">NewsMonkey</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/business">Business</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/general">General</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/healthscience">Healthscience</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/sports">Sports</a>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/technology">Technology</a>
                        </li>
                        
                        
                    </ul>
                
                </div>
            </div>
        </nav>
      </div>
    );
  }


export default navbar;
