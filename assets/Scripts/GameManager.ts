import { _decorator, Component, Node, Prefab, input, Input, EventMouse, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property({type: Node})
    public player: Node|null = null;

    @property({type: Prefab})
    public pl_bulletPrfb: Prefab|null = null;

    onMouseUp(event: EventMouse){
        if(event.getButton()==0){
            this.spawPl_bulet();
        }
    }
    
    spawPl_bulet(){
        if(!this.pl_bulletPrfb){
            return null;
        }

        let block: Node|null = null;

        block = instantiate(this.pl_bulletPrfb);

        this.node.addChild(block);

        console.log(this.player.getPosition());
        block.setPosition(this.player.getPosition());
    }

    start(){
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }
    update(deltaTime: number) {
    }
}


