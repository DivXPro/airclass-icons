// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudWindyLineSvg from '@airclass/icons-svg/lib/asn/CloudWindyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudWindyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudWindyLineSvg}></AntdIcon>;
};

CloudWindyLine.displayName = 'CloudWindyLine';
CloudWindyLine.inheritAttrs = false;
export default CloudWindyLine;