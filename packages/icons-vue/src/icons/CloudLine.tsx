// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudLineSvg from '@airclass/icons-svg/lib/asn/CloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLineSvg}></AntdIcon>;
};

CloudLine.displayName = 'CloudLine';
CloudLine.inheritAttrs = false;
export default CloudLine;