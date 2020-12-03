// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArchiveLineSvg from '@airclass/icons-svg/lib/asn/ArchiveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArchiveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveLineSvg}></AntdIcon>;
};

ArchiveLine.displayName = 'ArchiveLine';
ArchiveLine.inheritAttrs = false;
export default ArchiveLine;