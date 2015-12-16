documentWidth = window.screen.availWidth;  //显示浏览器的屏幕的可用宽度
gridContainerWidth = 0.92 * documentWidth;  //棋盘格的宽度
cellSideLength = 0.18 * documentWidth;   //格子间隙的宽度
cellSpace = 0.04*documentWidth;  //格子宽度

function getPosTop( i , j ){  //当前格子位子y坐标
    return cellSpace + i*( cellSpace + cellSideLength );
}
function getPosLeft( i , j ){  //当前格子x坐标
    return cellSpace + j*( cellSpace + cellSideLength );
}
function getNumberBackgroundColor( number ){  //不同数字背景的颜色
    switch( number ){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
    return "black";
}
function getNumberColor( number ){  //数字颜色
    if( number <= 4 )
        return "#776e65";

    return "white";
}
function nospace( board ){  //判断棋盘格是否有空格

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}
function canMoveLeft( board ){  //判断是否可以左移动

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1; j < 4 ; j ++ )
            if( board[i][j] != 0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}
function canMoveRight( board ){  //判断是否可以右移动

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}
function canMoveUp( board ){  //判断是否可以上移动

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}
function canMoveDown( board ){  //判断可以下移懂是否

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}
function noBlockHorizontal( row , col1 , col2 , board ){  //判断水平移动是否有中间格子
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}
function noBlockVertical( col , row1 , row2 , board ){   //判断垂直移动是否有中间格子
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}
function nomove( board ){  //判断是否不能移动
    if( canMoveLeft( board ) ||
        canMoveRight( board ) ||
        canMoveUp( board ) ||
        canMoveDown( board ) )
        return false;

    return true;
}

