import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ToutPanneaux from "./ToutPanneaux";

const SelectionCard = ({ panneauxNb, title, panneauxId }) => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.container}>
                {
                    panneauxNb === 1 ? <ToutPanneaux id={panneauxId[0]} width={'170%'} height={'75%'}/> : 
                    panneauxNb === 2 ? (
                        <View>
                            <View style={{ height: '75%', width: '75%' }}><ToutPanneaux id={panneauxId[0]} width={'160%'} height={'65%'}/></View>             
                            <View style={{ marginBottom: '-120%', marginLeft: '25%', height: '75%', width: '75%' }}><ToutPanneaux id={panneauxId[1]} width={'160%'} height={'65%'}/></View>         
                        </View>
                    ) : 
                    panneauxNb === 3 ? (
                        <View>
                            <View style={{ marginTop: '-10%', marginLeft: '-10%', height: '75%', width: '75%' }}><ToutPanneaux id={panneauxId[0]} width={'160%'} height={'65%'}/></View>             
                            <View style={{ marginTop: '-17%', marginLeft: '32%', height: '75%', width: '75%' }}><ToutPanneaux id={panneauxId[1]} width={'160%'} height={'65%'}/></View>         
                            <View style={{ marginBottom: '-175%', marginTop: '10%', marginLeft: '15%', height: '75%', width: '75%' }}><ToutPanneaux id={panneauxId[2]} width={'160%'} height={'65%'}/></View>         
                        </View>
                    ) :
                    panneauxNb === 4 ? (
                        <View>
                            <View style={{flex: 1, right: '5%', bottom: '20%', height: '65%', width: '65%' }}><ToutPanneaux id={panneauxId[0]} width={'160%'} height={'65%'}/></View>             
                            <View style={{flex: 1, left: '41%', bottom: '20%', height: '65%', width: '65%'}}><ToutPanneaux id={panneauxId[1]} width={'160%'} height={'65%'}/></View>         
                            <View style={{flex: 1, right: '5%', top: '100%', height: '65%', width: '65%'}}><ToutPanneaux id={panneauxId[2]} width={'160%'} height={'65%'}/></View>         
                            <View style={{flex: 1, left: '42%', marginTop: '40%', height: '65%', width: '65%'}}><ToutPanneaux id={panneauxId[3]} width={'160%'} height={'65%'}/></View>         
                        </View>
                    ) :
                    panneauxNb === 5 ? (
                        <View>
                            <View style={{flex: 1, right: '5%', bottom: '20%', height: '65%', width: '65%' }}><ToutPanneaux id={panneauxId[0]} width={'160%'} height={'65%'}/></View>             
                            <View style={{flex: 1, left: '41%', bottom: '10%', height: '55%', width: '55%'}}><ToutPanneaux id={panneauxId[1]} width={'160%'} height={'65%'}/></View>         
                            <View style={{flex: 1, right: '1%', top: '100%', height: '65%', width: '65%'}}><ToutPanneaux id={panneauxId[2]} width={'160%'} height={'65%'}/></View>         
                            <View style={{flex: 1, left: '42%', marginTop: '40%', height: '65%', width: '65%'}}><ToutPanneaux id={panneauxId[3]} width={'160%'} height={'65%'}/></View>         
                            <View style={{flex: 1, left: '15%', bottom: '70%', height: '75%', width: '75%'}}><ToutPanneaux id={panneauxId[4]} width={'160%'} height={'65%'}/></View>         
                        </View>
                    ) : <Text>Rien</Text>
                }                
            </View>
            <Text style={styles.containerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    container: {
        backgroundColor: '#1C2753',
        width: 160,
        height: 160,
        borderRadius: 20,
    },
    containerText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default SelectionCard;