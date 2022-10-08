import React from 'react';
import Head from "../meta/Head";

const Address: React.FC<{}> = (): JSX.Element => {
    const TITLE = '緯度軽度計算';

    return <div className='py-3 text-center'>
        <Head title={TITLE} />
        <h1 className='text-2xl font-bold'>{TITLE}</h1>
        <form>
        </form>
    </div>
};

export default Address;
