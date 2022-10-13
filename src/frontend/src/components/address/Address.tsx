import React, { useState } from 'react';
import axios from 'axios';
import Head from "../meta/Head";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Address: React.FC<{}> = (): JSX.Element => {
    const TITLE = '緯度軽度計算';

    return <div className='py-7 mx-auto text-center w-[500px] border border-gray-200 p-5 mt-5 bg-gray-50'>
        <Head title={TITLE} />
        <h1 className='text-2xl font-bold'>{TITLE}</h1>
        <AddressForm />
    </div>
};

const AddressForm: React.FC<{}> = (): JSX.Element => {
    const API_URL_GEOCODE = 'https://maps.googleapis.com/maps/api/geocode/json';

    const [searchWord, setSearchWord] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [lat, setLat] = useState<number>(0)
    const [lng, setLng] = useState<number>(0)
    const [center, setCenter] = useState<any>({lat: 0, lng: 0});
    const containerStyle = {
        width: "400px",
        height: "400px"
    };

    const search = (e: any) => {
        e.preventDefault();

        const params = {
            address: searchWord,
            key: process.env.REACT_APP_GOOGLE_API_KEY,
        }

        axios.get(API_URL_GEOCODE, {params: params})
            .then((results) => {
                const data =  results.data;
                const result = data.results[0];

                switch(data.status){
                    case 'OK': {
                        const location = result.geometry.location;
                        setAddress(result.formatted_address);
                        setLat(location.lat);
                        setLng(location.lng);
                        setCenter({lat: location.lat, lng: location.lng});
                        break;
                    }
                    case 'ZERO_RESULTS': {
                        setErrorMessage('結果が見つかりませんでした');
                        break;
                    }
                    default : {
                        setErrorMessage('通信に失敗しました');
                    }
                }
            })
            .catch((error) => {
                setErrorMessage('エラーが発生しました');
            });
    }

    const setErrorMessage = (message: string) => {
        setAddress(message);
        setLat(0);
        setLng(0);
    }

    return <form className='py-5 mx-auto'>
        <input
            className='border mr-2 px-1'
            type='text'
            value={searchWord}
            onChange={e => setSearchWord(e.target.value)}
        />
        <input
            className='text-sm bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-1'
            type='submit'
            value='検索'
            onClick={e => search(e)}
        />
        <div className='text-left py-3'>
            <ul>
                <li>住所：{address}</li>
                <li>軽度：{lat}</li>
                <li>緯度：{lng}</li>
            </ul>
        </div>
        <div className='flex justify-center py-5'>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    </form>
}

export default Address;
