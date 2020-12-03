// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrelloLineSvg from '@airclass/icons-svg/lib/asn/TrelloLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrelloLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrelloLineSvg}></AntdIcon>;
};

TrelloLine.displayName = 'TrelloLine';
TrelloLine.inheritAttrs = false;
export default TrelloLine;