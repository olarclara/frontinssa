import React from 'react';
import R from 'ramda';
import TalkItem from './TalkItem'

const Wrapper = children => (<div>{children}</div>);

const List = children => (<ul>
  {children}
</ul>);

const ListItem = (x) => (<li key={x.id}>
  <TalkItem talk={x}/>
</li>);

const MakeList = R.compose(Wrapper, List, R.map(ListItem), R.prop('items'));

export default MakeList;