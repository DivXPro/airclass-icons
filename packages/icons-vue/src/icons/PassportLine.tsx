// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PassportLineSvg from '@airclass/icons-svg/lib/asn/PassportLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PassportLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PassportLineSvg}></AntdIcon>;
};

PassportLine.displayName = 'PassportLine';
PassportLine.inheritAttrs = false;
export default PassportLine;