// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NetflixLineSvg from '@airclass/icons-svg/lib/asn/NetflixLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetflixLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NetflixLineSvg}></AntdIcon>;
};

NetflixLine.displayName = 'NetflixLine';
NetflixLine.inheritAttrs = false;
export default NetflixLine;