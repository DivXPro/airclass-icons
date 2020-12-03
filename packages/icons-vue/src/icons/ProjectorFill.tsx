// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProjectorFillSvg from '@airclass/icons-svg/lib/asn/ProjectorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProjectorFillSvg}></AntdIcon>;
};

ProjectorFill.displayName = 'ProjectorFill';
ProjectorFill.inheritAttrs = false;
export default ProjectorFill;