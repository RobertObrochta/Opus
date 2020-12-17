import React, { useState, useEffect } from 'react'
import { View, Dimensions, Animated } from 'react-native'
import PropTypes from 'prop-types'

const
    deviceWindow = Dimensions.get('window'),
    regexArr = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/]

const PassStrength = props => {
    const
        barLength = deviceWindow.width * 0.9,
        [passStat, setPassStat] = useState('Weak'),
        [animateVal, setAnimateVal] = useState(new Animated.Value(0)),
        [animateColor, setAnimateColor] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.spring(animateVal, { useNativeDriver: false, bounciness: 13, toValue: barLength * (props.password.length / props.maxLength) }).start()
        let passPoint = 0

        if (props.password.length > 0 && props.password.length < props.minLength)
            setPassStat(props.labels[0])
        else {
            regexArr.forEach(rgx => rgx.test(props.password) ? passPoint += 1 : null)
            setPassStat(props.labels[passPoint])
        }
        Animated.timing(animateColor, { toValue: passPoint, duration: 300, useNativeDriver: false, }).start()

    }, [props.password])

    const interpolateColor = animateColor.interpolate({
        inputRange: [0, 4],
        outputRange: ['rgb(255,0,0)', 'rgb(0, 255, 0)']
    })

    return (
        <View style={{ alignSelf: 'center' }}>
            <View style={styles.backBar} />
            <Animated.View style={[styles.mainBar, { backgroundColor: interpolateColor, width: animateVal }]} />
            {
                props.showLabels ?
                    props.password.length != 0 ?
                        <Animated.Text style={{ margin: 10, marginTop: 5, color: interpolateColor }}>{passStat}</Animated.Text>
                        : null
                    : null
            }
        </View>
    )
}

const styles = {
    backBar: {
        backgroundColor: '#aaa',
        width: deviceWindow.width * 0.72,
        height: 4,
        borderRadius: 25,
        marginTop: 10
    },
    mainBar: {
        position: 'absolute',
        backgroundColor: 'blue',
        height: 4,
        borderRadius: 25,
        marginTop: 10
    }
}
 PassStrength.propTypes = {
    minLength: PropTypes.number,
    showLabels: PropTypes.bool,
    maxLength: PropTypes.number,
    labels: PropTypes.array.isRequired,
    password: PropTypes.string.isRequired
}
 PassStrength.defaultProps = {
    minLength: 6,
    maxLength: 25,
    showLabels: true
}

export default PassStrength
