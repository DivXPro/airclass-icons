// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineLineSvg from '@airclass/icons-svg/lib/asn/LineLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineLineSvg}></AntdIcon>;
};

LineLine.displayName = 'LineLine';
LineLine.inheritAttrs = false;
export default LineLine;