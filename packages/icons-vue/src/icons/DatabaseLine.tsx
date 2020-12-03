// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DatabaseLineSvg from '@airclass/icons-svg/lib/asn/DatabaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseLineSvg}></AntdIcon>;
};

DatabaseLine.displayName = 'DatabaseLine';
DatabaseLine.inheritAttrs = false;
export default DatabaseLine;