import socketIO from 'socket.io';
import AgentLogger from '@best/agent-logger';

const FRONTEND_EVENTS = ['benchmark added', 'benchmark start', 'benchmark update', 'benchmark end', 'benchmark error', 'benchmark results', 'benchmark queued', 'benchmark cancel']

export default class Manager {
    private frontends: socketIO.Socket[] = [];
    private logger: AgentLogger;

    constructor(logger: AgentLogger) {
        this.logger = logger;
        this.attachListeners();
    }

    addFrontend(socket: socketIO.Socket) {
        const index = this.frontends.length;
        this.frontends.push(socket);

        socket.on('disconnect', () => {
            this.frontends.splice(index, 1);
        })
    }

    private attachListeners() {
        FRONTEND_EVENTS.forEach(e => {
            this.logger.on(e, (packet: any) => {
                this.notifyFrontends(e, packet);
            })
        })
    }

    private notifyFrontends(name: string, packet: any) {
        this.frontends.forEach(frontend => {
            frontend.emit(name, packet)
        })
    }
}