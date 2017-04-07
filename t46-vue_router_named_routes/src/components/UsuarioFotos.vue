<template lang="html">
    <section>
        <h1>Fotos</h1>
        <div class="row" >
            <div class="col-md-4" v-for="img in imagenes" style="padding-top:5px;">
                <img :src="img.url" alt="" class="img-responsive" :alt="img.alt">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imagenes: [
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},
                {url: 'https://marketplace.canva.com/MACB8rnuJGg/1/0/thumbnail_large/canva-negative-space-funny-desktop-wallpaper-MACB8rnuJGg.jpg', alt:'imgnes'},
                {url: "https://images4.alphacoders.com/640/640956.jpg", alt:'imagesSAO'},
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},
                {url: "http://natbg.com/wp-content/uploads/2016/09/lakes-purple-sunset-colorful-hills-sunlight-peaceful-pier-glow-amazing-sun-hill-sky-water-reflection-rays-clouds-grass-lake-tree-colord-landscape-colors-background-pictures.jpg", alt: 'imgWallp'},

            ]
        }
    }
}
</script>

<style lang="css">
</style>
