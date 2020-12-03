// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Html5LineSvg from '@airclass/icons-svg/lib/asn/Html5Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Html5Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Html5LineSvg}></AntdIcon>;
};

Html5Line.displayName = 'Html5Line';
Html5Line.inheritAttrs = false;
export default Html5Line;