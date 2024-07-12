<template>
    <article class="article">
        <div class="article-container" v-if="!(activatedTitle === '')">
            <div class="article-title">{{ activatedTitle }}</div>
            <div class="article-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Quis hendrerit dolor magna eget.
                    Dignissim convallis aenean et tortor at risus viverra adipiscing at. Scelerisque varius morbi enim
                    nunc faucibus a pellentesque sit. Enim lobortis scelerisque fermentum dui. Enim facilisis gravida
                    neque convallis a cras semper. At quis risus sed vulputate odio. Scelerisque purus semper eget duis
                    at tellus at urna condimentum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.
                    Blandit cursus risus at ultrices mi tempus imperdiet nulla. Tortor pretium viverra suspendisse
                    potenti nullam ac. Tellus elementum sagittis vitae et. Sem viverra aliquet eget sit amet tellus
                    cras. Convallis convallis tellus id interdum velit. Tortor vitae purus faucibus ornare.</p>
                <p>Amet consectetur adipiscing elit ut aliquam purus. Et ligula ullamcorper malesuada proin libero nunc
                    consequat interdum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Vulputate mi
                    sit amet mauris commodo. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Duis
                    convallis convallis tellus id interdum velit laoreet. Nec feugiat in fermentum posuere urna nec
                    tincidunt. Ut porttitor leo a diam sollicitudin tempor id. Sapien faucibus et molestie ac feugiat
                    sed lectus. Ullamcorper morbi tincidunt ornare massa eget.</p>
                <p>Massa id neque aliquam vestibulum morbi blandit. Varius duis at consectetur lorem donec massa sapien.
                    Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Sapien pellentesque habitant morbi
                    tristique senectus et netus. Praesent tristique magna sit amet. Libero enim sed faucibus turpis in
                    eu mi. Sagittis vitae et leo duis ut diam. Sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Blandit libero volutpat sed cras ornare arcu. Lectus sit amet est placerat in
                    egestas erat imperdiet. Tristique nulla aliquet enim tortor at. Vitae aliquet nec ullamcorper sit
                    amet risus nullam eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque.
                    Interdum consectetur libero id faucibus. Fermentum dui faucibus in ornare quam viverra orci
                    sagittis. Arcu felis bibendum ut tristique.</p>
                <p>Sagittis vitae et leo duis ut. Quis hendrerit dolor magna eget est lorem ipsum dolor. Faucibus
                    pulvinar elementum integer enim. Eleifend donec pretium vulputate sapien nec sagittis aliquam
                    malesuada bibendum. Tortor condimentum lacinia quis vel eros. Velit euismod in pellentesque massa
                    placerat duis. Elit ut aliquam purus sit amet luctus venenatis lectus. Neque viverra justo nec
                    ultrices dui sapien eget mi. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Et leo
                    duis ut diam quam nulla porttitor massa id. Vel eros donec ac odio tempor orci. Elementum nisi quis
                    eleifend quam adipiscing vitae proin sagittis. Lacinia quis vel eros donec ac odio tempor. Nunc
                    congue nisi vitae suscipit tellus mauris a. Eu sem integer vitae justo eget. Sem nulla pharetra diam
                    sit amet nisl.</p>
                <p>Cursus euismod quis viverra nibh. Cras semper auctor neque vitae tempus. Tortor at risus viverra
                    adipiscing at in. Morbi tincidunt ornare massa eget. Nec sagittis aliquam malesuada bibendum arcu
                    vitae elementum. Enim ut tellus elementum sagittis. Urna molestie at elementum eu facilisis sed odio
                    morbi. Duis at tellus at urna condimentum mattis pellentesque. Urna porttitor rhoncus dolor purus
                    non enim. Lorem mollis aliquam ut porttitor leo a diam. Morbi tristique senectus et netus. Augue ut
                    lectus arcu bibendum. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum
                    lacinia quis. Tempus egestas sed sed risus pretium. Tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio. Egestas sed tempus urna et pharetra. Ultricies leo integer malesuada nunc.</p>
                <p>Parturient montes nascetur ridiculus mus mauris vitae ultricies. Quisque id diam vel quam. Diam
                    maecenas sed enim ut. Lacinia at quis risus sed vulputate odio ut. Libero enim sed faucibus turpis
                    in eu mi bibendum. Sollicitudin tempor id eu nisl. Accumsan in nisl nisi scelerisque eu ultrices
                    vitae. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Egestas purus viverra
                    accumsan in nisl nisi scelerisque. Nulla aliquet porttitor lacus luctus accumsan. Aliquam purus sit
                    amet luctus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Est ullamcorper eget
                    nulla facilisi etiam dignissim diam quis enim. Cursus turpis massa tincidunt dui ut ornare lectus.
                    Amet cursus sit amet dictum sit amet justo donec enim.</p>
                <p>Sed faucibus turpis in eu mi. Consectetur adipiscing elit pellentesque habitant morbi tristique
                    senectus et netus. Metus dictum at tempor commodo. Hendrerit dolor magna eget est lorem ipsum dolor
                    sit. Sagittis orci a scelerisque purus semper eget duis at. Turpis egestas integer eget aliquet nibh
                    praesent tristique magna. Mauris commodo quis imperdiet massa tincidunt nunc. Tincidunt id aliquet
                    risus feugiat in ante metus dictum. Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Eu consequat ac felis donec et odio pellentesque diam volutpat. Elementum pulvinar etiam non
                    quam lacus suspendisse faucibus.</p>
                <p>Sit amet volutpat consequat mauris. Hac habitasse platea dictumst quisque sagittis purus sit.
                    Vulputate odio ut enim blandit volutpat maecenas volutpat. Eget magna fermentum iaculis eu non diam
                    phasellus vestibulum lorem. Nibh mauris cursus mattis molestie a iaculis. Nisl rhoncus mattis
                    rhoncus urna neque viverra justo nec. Felis eget nunc lobortis mattis aliquam faucibus purus. Enim
                    ut sem viverra aliquet. Morbi tincidunt ornare massa eget egestas. Lorem mollis aliquam ut
                    porttitor. Erat pellentesque adipiscing commodo elit at. Euismod quis viverra nibh cras pulvinar.
                    Tellus elementum sagittis vitae et leo duis ut. Auctor eu augue ut lectus arcu bibendum at varius
                    vel. Vulputate enim nulla aliquet porttitor. Tincidunt eget nullam non nisi est. Integer feugiat
                    scelerisque varius morbi enim nunc faucibus a pellentesque. Felis imperdiet proin fermentum leo vel
                    orci porta.</p>
                <p>Nunc sed augue lacus viverra vitae congue eu consequat ac. Non sodales neque sodales ut. Eu nisl nunc
                    mi ipsum faucibus vitae aliquet nec ullamcorper. Mus mauris vitae ultricies leo integer malesuada
                    nunc. Cras semper auctor neque vitae tempus quam pellentesque. Mollis nunc sed id semper risus in
                    hendrerit gravida. Sagittis eu volutpat odio facilisis mauris sit. Id leo in vitae turpis massa sed
                    elementum tempus. Ultricies lacus sed turpis tincidunt id aliquet. Enim sed faucibus turpis in eu mi
                    bibendum neque egestas. Nullam non nisi est sit amet facilisis magna. Arcu ac tortor dignissim
                    convallis aenean et tortor at. Proin nibh nisl condimentum id. Ultrices sagittis orci a scelerisque
                    purus semper. Leo in vitae turpis massa sed elementum tempus egestas sed. Sit amet luctus venenatis
                    lectus magna fringilla. Amet tellus cras adipiscing enim eu. Pellentesque habitant morbi tristique
                    senectus et. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Nullam
                    vehicula ipsum a arcu cursus vitae.</p>
                <p>Enim facilisis gravida neque convallis. Vestibulum lectus mauris ultrices eros in. Semper feugiat
                    nibh sed pulvinar proin gravida hendrerit. Nibh venenatis cras sed felis eget. Et molestie ac
                    feugiat sed lectus vestibulum. Sed augue lacus viverra vitae congue eu consequat ac felis. Egestas
                    integer eget aliquet nibh praesent. Egestas maecenas pharetra convallis posuere morbi leo urna
                    molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Amet purus gravida quis
                    blandit turpis. Vestibulum lorem sed risus ultricies. Vitae turpis massa sed elementum tempus
                    egestas sed sed risus.</p>
            </div>
        </div>
    </article>
</template>
<style lang='less' scoped>
.article {
    flex: 1;
    margin-left: 100px;
    padding: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    .article-container {
        margin: 0 auto;
        text-align: left;

        .article-title {
            font-size: 48px;
            font-weight: bold;
            margin: 20px;
        }

        .article-content {
            text-indent: 2em;
            line-height: 1.5;
            font-size: 20px;
        }
    }
}
</style>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['activatedTitle']),
    }
}
</script>