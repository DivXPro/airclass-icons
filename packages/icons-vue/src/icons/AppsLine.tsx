// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppsLineSvg from '@airclass/icons-svg/lib/asn/AppsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppsLineSvg}></AntdIcon>;
};

AppsLine.displayName = 'AppsLine';
AppsLine.inheritAttrs = false;
export default AppsLine;