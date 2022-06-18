import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/710Val';
const imageProfileGitHub = "https://avatars.githubusercontent.com/u/86447935?s=400&u=f505948daca93268e13d9a6641736d1e16560a97&v=4"
const App = () => {
    
    const handlePressGoToGithub = async () => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    console.log('aprovado');
    
    if(res){
      await Linking.openURL(urlToMyGithub);
    }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image acessibilityLabel='Luísa com a mão a boca, fundo de copas de árvores'
                    style={style.avatar}
                    source={{ uri: imageProfileGitHub }} />

                <Text acessibilityLabel="Nome: Luísa Valadares"
                    style={[style.defaultText, style.name]}>Luísa Valadares</Text>
                <Text acessibilityLabel="Nickname: 710Val"
                    style={[style.defaultText, style.nickname]}>710Val</Text>
                <Text acessibilityLabel="Descrição: Student of Software Analysis and Development
                 at Pontifícia Universidade Católica de Minas Gerais, Brasil"
                style={[style.defaultText, style.description]}>
                Student of Software Analysis and Development
                at Pontifícia Universidade Católica de Minas Gerais, Brasil</Text>
                <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                     <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                 </View>
                 </Pressable>
            </View>
      
        </SafeAreaView>
    );
};
export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
            },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,

    },
    name: {
     fontSize: 20,
     fontWeight: 'bold', 
     marginTop:20,
    },
    nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
    },
    description:{
    fontSize: 14,
    fontWeight: 'bold',    
},
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});