import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import  { PatientBasicCard } from './common';
import axios from 'axios';
import { connect } from 'react-redux';

class MainMenu extends Component {
  list = { patients: [] };

  fetchData() {
    console.log('fetching')
    fetch('https://floating-escarpment-15714.herokuapp.com/pacients', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        console.log('got user info: ' + response);
        if(response.status === 401) {
          console.log("Erro");
        } else {
          console.log("Success!!");
          response.json().then(data => {
            console.log('data: ' )
            console.log(data.data.pacients);
            this.list.patients = data.data.pacients;
          });
        }
      })
      .catch((error) => {
        console.log('ERORORRO: ' + error)
      })
  }

  list_(){
    console.log('LIST')
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  };


  render() {
    const { mainViewStyle, titleStyle, allPatientsViewStyle } = styles;
    const { auth_token } = this.props;

    this.fetchData()
    this.list_()

    return(
      <View style={mainViewStyle}>
        <Text style={titleStyle}>Patients</Text>
        <ListView
          dataSource={this.list.patients}
          renderRow={(rowData) =>
              <View style={allPatientsViewStyle}>
                <PatientBasicCard name={rowData.name} age={rowData.age} image={require('../assets/images/tiago.jpeg')} />
              </View>
          }
        />
      </View>
    )
  }
}

const styles = {
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%'
  },

  allPatientsViewStyle: {
  },

  titleStyle: {
  }
}

const mapStateToProps = (state) => {
  console.log("state: " + state.auth.auth_token)
  return { auth_token: state.auth.auth_token }
}

export default connect(mapStateToProps, {} )(MainMenu);
