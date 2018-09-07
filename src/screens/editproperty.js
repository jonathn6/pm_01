import React from 'react';

//think of react components as functions
class editproperty extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            nbrRecords: 0,
            data: ''
        };
        this.renderDollar = this.renderDollar.bind(this);   
        this.renderPercent = this.renderPercent.bind(this);     
        this.loadData = this.loadData.bind(this);    
    }


    loadData() {

        let currentComponent = this;
 
        var url = "https://api.mlab.com/api/1/databases/test-db/collections/buildings?apiKey=7qVBz8U57eN2ZvobziWxyhxq1UpqiLnO";

        const options = { method: 'GET' };

        fetch( url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {   
            var productsReturned = myJson;              
            currentComponent.setState({data:productsReturned, nbrRecords:productsReturned.length});                
        });

    }

    componentWillMount() {  
        this.loadData();
    }

    renderDollar(price){

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          })
          
        return(
          <div>{formatter.format(price)}</div>
        )
      }

      renderPercent(pct){
  
          const formatted_percent = pct + "%";
            
          return(
            <div>{formatted_percent}</div>
          )
        }


    renderUnit = (passedData) => {
        
        var tempArray = [];
        var nbrOfUnits = parseInt(passedData.number_of_units);

        switch (nbrOfUnits) {
            case 1:
                tempArray[1] = passedData.unit_01;
                break;
            case 2:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                break;
            case 3:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                break;
            case 4:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                break;
            case 5:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                break;   
            case 6:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                break;    
            case 7:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                break;   
            case 8:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                break;   
            case 9:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                break;  
            case 10:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                break;   
            case 11:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                break;  
            case 12:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                break; 
            case 13:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                break; 
            case 14:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                break; 
            case 15:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                break; 
            case 16:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                tempArray[16] = passedData.unit_16;
                break;
            case 17:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                tempArray[16] = passedData.unit_16;
                tempArray[17] = passedData.unit_17;
                break;
            case 18:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                tempArray[16] = passedData.unit_16;
                tempArray[17] = passedData.unit_17;
                tempArray[18] = passedData.unit_18;
                break;
            case 19:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                tempArray[16] = passedData.unit_16;
                tempArray[17] = passedData.unit_17;
                tempArray[18] = passedData.unit_18;
                tempArray[19] = passedData.unit_19;
                break;
            case 20:
                tempArray[1] = passedData.unit_01;
                tempArray[2] = passedData.unit_02;
                tempArray[3] = passedData.unit_03;
                tempArray[4] = passedData.unit_04;
                tempArray[5] = passedData.unit_05;
                tempArray[6] = passedData.unit_06;
                tempArray[7] = passedData.unit_07;
                tempArray[8] = passedData.unit_08;
                tempArray[9] = passedData.unit_09;
                tempArray[10] = passedData.unit_10;
                tempArray[11] = passedData.unit_11;
                tempArray[12] = passedData.unit_12;
                tempArray[13] = passedData.unit_13;
                tempArray[14] = passedData.unit_14;
                tempArray[15] = passedData.unit_15;
                tempArray[16] = passedData.unit_16;
                tempArray[17] = passedData.unit_17;
                tempArray[18] = passedData.unit_18;
                tempArray[19] = passedData.unit_19;
                tempArray[20] = passedData.unit_20;
                break;
        }

        return tempArray.map( (data, index) => (
            <div>
                <hr />
                <div className="container div-spacing-small">
                    <div className="row input-group div-height">
                        <div className="col-5 text-bold">Unit {index}</div>
                        <div className="col-7">
                            &nbsp;
                        </div>
                    </div> 
                </div>
                <div className="container div-spacing-small">
                    <div className="row input-group div-height">
                        <div className="col-3">Rent</div>
                        <div className="col-3">
                            <label> {this.renderDollar(data.rent)} </label>
                        </div>
                        <div className="col-3">Beds/Bath</div>
                        <div className="col-3">
                            <label> {data.bedroom} / {data.bathroom}</label>
                        </div>
                    </div> 
                </div>
                <div className="container div-spacing-small">
                    <div className="row input-group div-height">
                        <div className="col-3">Category</div>
                        <div className="col-3">
                            <label> {data.catagory} </label>
                        </div>
                        <div className="col-3">Vacant</div>
                        <div className="col-3">
                            <label> {data.vacant}</label>
                        </div>
                    </div> 
                </div>
            </div>
        ))
    }

    renderData = () => {   

            return this.state.data.map( data => (
                <div>
                    <div className="container div-spacing-small">
                        <div className="row input-group div-height">
                            <div className="col-4">Nickname</div>
                            <div className="col-6">
                                <label> {data.nickname} </label>
                            </div>
                            <div className="col-2">                        
                                <button className="btnStartScan"
                                    type='button'     
                                    onClick={() => { 
                                    this.deleteData(data._id.$oid);
                                    }}>
                                    Delete
                                </button> 
                            </div>
                        </div>  
                        <div className="row input-group div-height">
                            <div className="col-4">Address</div>
                            <div className="col-6">
                                <label> {data.address} </label>
                            </div>
                            <div className="col-2">                        
                                <button className="btnStartScan"
                                    type='button'     
                                    onClick={() => { 
                                        this.editData(data._id.$oid);
                                    }}>
                                    Edit
                                </button> 
                            </div>
                        </div>  
                        <div className="row input-group div-height">
                            <div className="col-4">City</div>
                            <div className="col-8">
                                <label> {data.city} </label>
                            </div>
                        </div> 
                        <div className="row input-group div-height">
                            <div className="col-4">Price</div>
                            <div className="col-8">
                                <label> {this.renderDollar(data.asking_price)}</label>
                            </div>
                        </div> 
                        <div className="row input-group div-height">
                            <div className="col-4">Expenses</div>
                            <div className="col-8">
                                <label> {this.renderDollar(data.net_operating_expences)}</label>
                            </div>
                        </div> 
                        <div className="row input-group div-height">
                            <div className="col-4">NOI</div>
                            <div className="col-8">
                                <label> {this.renderDollar(data.net_operating_income)}</label>
                            </div>
                        </div> 
                        <div className="row input-group div-height">
                            <div className="col-4">Taxes</div>
                            <div className="col-8">
                                <label> {this.renderDollar(data.taxes)}</label>
                            </div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-4">Abaitment?</div>
                            <div className="col-8">
                                <label> {data.tax_abatement}</label>
                            </div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-4">Cap Rate</div>
                            <div className="col-8">
                                <label> {this.renderPercent(data.cap_rate)}</label>
                            </div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-4">Block/Lot</div>
                            <div className="col-8">
                                <label> {data.block} / {data.lot} </label>
                            </div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-4">Fuel Type</div>
                            <div className="col-8">
                                <label> {data.fuel_type} </label>
                            </div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-4">Tenant Pays</div>
                            <div className="col-8">
                                <label> {data.tenant_pays} </label>
                            </div>
                        </div>
                        <div>
                            {this.renderUnit(data)}
                        </div> 
                        <div className="row input-group div-height">
                            <div className="col-12">Notes</div>
                        </div>
                        <div className="row input-group div-height">
                            <div className="col-12">
                                <label> {data.notes} </label>
                            </div>
                        </div>
                    </div> 
                    <hr />
                    <hr />
                </div>
            ) )   
    }

    render() 
        {     
            if (this.state.nbrRecords > 0) 
            {
                return (
                    <div>    
                        <div className="App">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#">Property Management</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/loadproperty">View Saved Properties</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/enterproperty">Enter New Property</a>
                                    </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div>
                            {this.state.data && this.renderData()}
                        </div>       
                    </div>
                )
            }
            else
            {
                return (
                    <div>    
                        <div className="App">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#">Property Management</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/loadproperty">View Saved Properties</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/enterproperty">Enter New Property</a>
                                    </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <div className="container div-spacing-small">
                                <div className="row input-group div-height">
                                    <div className="col-12">There are no saved properties</div>
                                </div>
                            </div>
                        </div>       
                    </div>
                )                
            }
        }
}
          
export default editproperty