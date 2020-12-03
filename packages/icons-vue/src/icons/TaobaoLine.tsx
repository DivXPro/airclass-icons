// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaobaoLineSvg from '@airclass/icons-svg/lib/asn/TaobaoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaobaoLineSvg}></AntdIcon>;
};

TaobaoLine.displayName = 'TaobaoLine';
TaobaoLine.inheritAttrs = false;
export default TaobaoLine;