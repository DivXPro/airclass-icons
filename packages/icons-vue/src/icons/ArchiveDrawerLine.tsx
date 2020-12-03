// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArchiveDrawerLineSvg from '@airclass/icons-svg/lib/asn/ArchiveDrawerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArchiveDrawerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveDrawerLineSvg}></AntdIcon>;
};

ArchiveDrawerLine.displayName = 'ArchiveDrawerLine';
ArchiveDrawerLine.inheritAttrs = false;
export default ArchiveDrawerLine;