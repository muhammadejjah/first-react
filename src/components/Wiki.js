import { useEffect, useState } from "react";
import axios from 'axios';
import usePraveState from "../hooks/usePraveState";
export default function Wiki() {
    const [term, setTerm] = useState('any');
    const [result, setResult] = useState([]);
    const prevTerm = usePraveState(term)

    useEffect(() => {
        const search = async () => {
            const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResult(respond.data.query.search);
        };
        if (!result.length) {
            search();
        } else if (term !== prevTerm) {
            const debounceSearch = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1200);
            return () => {
                clearTimeout(debounceSearch);
            };
        }
    }, [term, result.length, prevTerm]);
    // console.log(result)
    const fetchResult = result.map((el, idx) => {
        return (
            <tr key={el.pageid}>
                <th scope='row'>{idx + 1}</th>
                <td>{el.title}</td>
                <td><span dangerouslySetInnerHTML={{ "__html": el.snippet }} /></td>
            </tr>);
    })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='my-3'>
                        <label htmlFor='exampleFormControlInput1' className='form-label'>
                            Search Input
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            value={term}
                            onChange={(e) => { setTerm(e.target.value) }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchResult}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}