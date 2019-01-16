import React from 'react';

class Home extends React.Component {

    state = {
        ccy: [],
        inputSum: {},
        isLoad: false
    };

    componentDidMount() {
        this.setState({isLoad: true});
        //let self=this;
        setTimeout(() => {
            fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
                .then(res =>{
                    //throw new Error('Hello my error');
                    //console.log('---Ajax result---',res);
                    // if(res.status==200)
                    // {

                    // }
                    //console.log('---Ajax result json---',res.json());
                    return res.json();
                })
                .then(data => {
                    //console.log('-------Data server res------', data);
                    this.setState({ccy: data, isLoad: false});
                })
                .catch(er => {
                    alert(`Помилка ${er.message}`);
                });
            
        }, 2000);
    }

    onHandlerChange=(e) => {
        //console.log("----input change----", e.target.value);
        this.setState({inputSum: e.target.value});
    }

    onHandlerChangeSelect=(e) => {
        console.log("----select change----", e.target.value);
        //this.setState({inputSum: e.target.value});
    }


    render() {
        console.log("--state--",this.state);
        //const isLoad = this.state.isLoad;
        const {isLoad} = this.state;
        const options = this.state.ccy.map((c) =>{
            return (
                <option key={c.ccy}>{c.ccy}</option>
            );
        });
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Головна сторінка</h1>
                </div>

                <div>
                    <input type="text" onChange={this.onHandlerChange} />
                    {isLoad && <span>Loading ...</span>}
                    {!isLoad &&
                    <select onChange={this.onHandlerChangeSelect}>
                        <option></option>
                        {options}
                    </select>
                    }
                </div>
                
                
            </div>
        );
    }
}

export default Home;