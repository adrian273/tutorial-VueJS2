<template>
      <section>
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">{{this.$route.params.ident}}</h3>
              </div>
              <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <b class="text-danger">{{this.$route.params.ident}}</b>.
              </div>
              <div class="panel-footer">

              </div>
            </div>
      </section>
</template>
