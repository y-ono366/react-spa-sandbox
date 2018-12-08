import React from 'react'

// Stateless Functional Component
// renderのみが実装されたReact ComponentでReactライブラリをimportすることで自動的にComponentとして判別してくれる
// 通常のReact Componentと違いライフサイクルのコールバックのオーバヘッドがないため、軽量
const NumberPlate = (props) => {
  return <span style={{ color: '#eeeeee' }}>{props.children}</span>
}

export default NumberPlate
