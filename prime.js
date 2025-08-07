function prime ( num )
{
    if ( num < 2 ) { return false; }
    for ( let i = 2; i < num; i++ )
    {
        if ( num % i === 0 ) { return false; }

    }
    return true;
}


for ( let i = 1; i < 20; i++ )
{
    if ( prime( i ) )
    {
        console.log( i );
    }
}