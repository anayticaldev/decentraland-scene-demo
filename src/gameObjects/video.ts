export class VideoScreen extends Entity {
    constructor() {
        super();
        const myVideoClip = new VideoClip(
            'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
        )
        
        
        
        // #2
        const myVideoTexture = new VideoTexture(myVideoClip) 
        
        // #3
        const myMaterial = new Material()
        myMaterial.albedoTexture = myVideoTexture
        myMaterial.roughness = 1
        myMaterial.specularIntensity = 0
        myMaterial.metallic = 0
        
    
    
        // #4
        const screen = new Entity()
        
        screen.addComponent(new PlaneShape())
        screen.addComponent(
        new Transform({
            position: new Vector3(2, 2, 0),
            scale: new Vector3(4, 5, 5),
        })
        )
        screen.addComponent(myMaterial)
        screen.addComponent(
            new OnPointerDown(() => {
            
            myVideoTexture.playing = !myVideoTexture.playing
            })
        )
        engine.addEntity(screen)
    }
}
    