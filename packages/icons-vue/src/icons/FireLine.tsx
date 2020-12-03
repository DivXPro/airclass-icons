// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FireLineSvg from '@airclass/icons-svg/lib/asn/FireLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FireLineSvg}></AntdIcon>;
};

FireLine.displayName = 'FireLine';
FireLine.inheritAttrs = false;
export default FireLine;