import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pl_bulletController')
export class pl_bulletController extends Component {

    @property()
    speed: number;

    collidingWithEdge(){
        //let size = this.node.getContentSize();
        let curPos = this.node.getPosition();
        let visibleSize = view.getVisibleSize();
        
        let y = curPos.y;
        
        console.log(visibleSize.y);

        // if(y>visibleSize.height){
        //     console.log('out');
        //     this.node.removeFromParent();
        // }
    
        
    }

    update(deltaTime: number) {
        let direction = new Vec3(0, 1, 0);
        let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * deltaTime));
        this.node.setPosition(newPosition);

        this.collidingWithEdge();
    }
}


