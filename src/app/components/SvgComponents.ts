import ServiceIcon from '../../../public/images/service.svg';
import RocketIcon from '../../../public/images/rocket.svg';
import CodeIcon from '../../../public/images/code.svg';
import PluginIcon from '../../../public/images/plugin.svg';
import BlingIcon from '../../../public/images/bling.svg'
import ToolIcon from '../../../public/images/tool.svg'

const SvgComponents: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  '/images/service.svg': ServiceIcon,
  '/images/rocket.svg': RocketIcon,
  '/images/code.svg': CodeIcon,
  '/images/plugin.svg': PluginIcon,
  '/images/bling.svg': BlingIcon,
  '/images/tool.svg': ToolIcon,
};

export default SvgComponents;