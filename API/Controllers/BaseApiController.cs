using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // Sets the base route for all derived controllers to "api/[controller]"
    [Route("api/[controller]")]
    // Marks this class as an API controller (enables features like model binding, validation, etc.)
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        // Private field to hold the IMediator instance (nullable)
        private IMediator? _mediator;

        // Protected property to access the IMediator instance
        // Uses lazy initialization: if _mediator is null, it retrieves IMediator from the DI container
        // Throws an exception if IMediator is not available (should not happen if properly registered)
        protected IMediator Mediator =>
            _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
                ?? throw new InvalidOperationException("IMediator service is unavailable");
    }
}
