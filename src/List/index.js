import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){
    function carregarIcone(liked){
        return liked ? require('../img/likeada.png') : require('../img/like.png')
    }

    function showLikes(likers){
        if(likers === 0){
            return;
        }
        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        )
    }

    return(
        <View>
            <View style={styles.viewPerfil}>
                <Image 
                    source={{uri: props.data.imgperfil}}
                    style={styles.imgPerfil}
                />
                <Text style={styles.userName}>{props.data.nome}</Text>
            </View>
            <Image 
                source={{uri: props.data.imgPublicacao}}
                style={styles.imgPublicacao}
                resizeMode="contain"
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image 
                        source={carregarIcone(props.data.liked)}
                        style={styles.likeIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.commentBtn}>
                    <Image 
                        source={require('../img/comment.png')}
                        style={styles.commentIcon}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.sendBtn}>
                    <Image 
                        source={require('../img/send.png')}
                        style={styles.sendIcon}
                    />
                </TouchableOpacity>
            </View>

            {showLikes(props.data.likers)}

        <View style={styles.legendArea}>
            <Text style={styles.nameFooter}>
                {props.data.nome}
            </Text>

            <Text style={styles.descFooter}>
                {props.data.descricao}
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
        marginLeft: 5
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userName: {
        paddingLeft: 8,
        fontSize: 20,
        color: '#000000'
    },
    imgPublicacao: {
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        marginBottom: 18,
        marginLeft: 5
    },
    likeIcon: {
        width: 25,
        height: 25,
    },
    commentIcon: {
        width: 25,
        height: 25,
        marginLeft: 5
    },
    sendIcon: {
        width: 25,
        height: 25,
        marginLeft: 5
    },
    commentBtn: {
        paddingLeft: 10
    },
    sendBtn: {
        paddingLeft: 10
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 12
    },
    nameFooter: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descFooter: {
        paddingLeft: 5,
        paddingBottom: 15,
        fontSize: 16
    },
    legendArea: {
        flexDirection: 'row',
        marginLeft: 7
    }
})