let projectile: Sprite = null
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . 6 7 7 8 . . 
    . 6 7 7 8 . . . 
    . 8 7 8 . . 6 8 
    . 8 7 8 . 6 6 8 
    . . 8 6 8 8 8 . 
    . . . 8 6 8 . . 
    6 6 . . 8 7 8 . 
    8 6 6 8 7 7 8 . 
    . 8 8 7 7 8 . . 
    . 8 7 7 8 . . . 
    . 8 7 8 . 8 6 . 
    . 8 7 8 . 8 6 6 
    . . 8 6 8 . 8 8 
    . . . 8 6 8 . . 
    . . . . 8 7 8 . 
    . . . 6 7 7 8 . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx > 0) {
        projectile.image.flipX()
    }
})
