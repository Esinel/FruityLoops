import { Collectible } from '../../types';
import styles from './index.module.css';

type TileProps = {
    collectable: Collectible,
    key: number,
    handleClick?: Function,
    children: React.ReactNode
    style?: React.CSSProperties
}


function Tile({ collectable, key, handleClick, children, style }: TileProps) {
    return (
        <div 
            className={styles.collectableItem} 
            key={key} 
            onClick={() => handleClick && handleClick(collectable)}
            style={{backgroundColor: collectable.config.color || 'white', ...style}}
        >
            {children}
        </div>
    )
}

export default Tile;