jQuery(document).ready(function ($) {


    var app = {
        
        restUrl : 'http://wordcampdemo.wpengine.com/wp-json/',
        
        init : function() {
            
            this.getSiteData()
            this.loadPosts()
            this.loadCategories()
            this.loadEvents()
            
        },
        
        loadEvents : function() {
            
            $( '#main-content' ).on( 'click', '.blog-post', this.loadSinglePost )
            
        },
        
        getSiteData : function() {
            
            $.get( this.restUrl )
                .done( function( response ) {
                    $( '.site-title' ).html( response.name )
                    $( '.description' ).html( response.description )
                })
                .fail( function() {
                    alert( 'failed to call specified URL' )
                })

        },
        
        loadPosts : function() {
            
            var url = this.restUrl + 'wp/v2/posts?_embed'
            
            $.get( url )
                .done( function( response ) {
                    
                    var posts = {
                        posts: response
                    }
                    
                    var template = $( '#blog-post-template' ).html()
                    var output = $( '#main-content' )
                                        
                    var result = Mustache.to_html( template, posts )
                    output.append( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load posts' )
                })
            
        },
        
        loadCategories : function() {
            
            var url = this.restUrl + 'wp/v2/categories'
            
            $.get( url )
                .done( function( response ) {
                    
                    var categories = {
                        categories : response
                    }
                    
                    var template = $( '#blog-categories-template' ).html()
                    var output = $( '#categories' )
                                        
                    var result = Mustache.to_html( template, categories )
                    output.append( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load categories' )
                })
            
        },
        
        loadSinglePost : function() {
            
            var id = Math.abs( $( this ).data( 'id' ) )
            var url = this.restUrl + '/wp/v2/posts/' + id
            
            $.get( url )
                .done( function( response ) {
                    
                    var post = {
                        post : response
                    }
                    
                    var template = $( '#single-post-template' ).html()
                    var output = $( '#main-content' )
                                        
                    var result = Mustache.to_html( template, post )
                    output.append( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load post' )
                })
            
            
        }
   
        
    }

    app.init();

});
